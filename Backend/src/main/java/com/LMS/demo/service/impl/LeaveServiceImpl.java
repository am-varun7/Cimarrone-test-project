package com.LMS.demo.service.impl;

import com.LMS.demo.dto.LeaveApplyRequestDTO;
import com.LMS.demo.dto.LeaveResponseDTO;
import com.LMS.demo.entity.Employee;
import com.LMS.demo.entity.LeaveRecord;
import com.LMS.demo.entity.enums.LeaveStatus;
import com.LMS.demo.exception.ResourceNotFoundException;
import com.LMS.demo.repository.EmployeeRepository;
import com.LMS.demo.repository.LeaveRecordRepository;
import com.LMS.demo.service.LeaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class LeaveServiceImpl implements LeaveService {

    private final LeaveRecordRepository leaveRepository;
    private final EmployeeRepository employeeRepository;

    @Override
    public LeaveResponseDTO applyLeave(
            Long employeeId,
            LeaveApplyRequestDTO request
    ) {

        Employee employee = employeeRepository
                .findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found"
                        ));

        LeaveRecord leave = LeaveRecord.builder()
                .reason(request.getReason())
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .appliedDate(LocalDate.now())
                .status(LeaveStatus.PENDING)
                .employee(employee)
                .build();

        LeaveRecord savedLeave =
                leaveRepository.save(leave);

        return mapToDTO(savedLeave);
    }

    @Override
    public LeaveResponseDTO cancelLeave(
            Long leaveId
    ) {

        LeaveRecord leave = leaveRepository
                .findById(leaveId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Leave record not found"
                        ));

        leave.setStatus(
                LeaveStatus.CANCELLED
        );

        LeaveRecord updatedLeave =
                leaveRepository.save(leave);

        return mapToDTO(updatedLeave);
    }

    @Override
    public LeaveResponseDTO updateLeaveStatus(
            Long leaveId,
            LeaveStatus status
    ) {

        LeaveRecord leave = leaveRepository
                .findById(leaveId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Leave record not found"
                        ));

        leave.setStatus(status);

        LeaveRecord updatedLeave =
                leaveRepository.save(leave);

        return mapToDTO(updatedLeave);
    }

    @Override
    public List<LeaveResponseDTO> getEmployeeLeaves(
            Long employeeId
    ) {

        employeeRepository
                .findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found"
                        ));

        return leaveRepository
                .findByEmployeeId(employeeId)
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    private LeaveResponseDTO mapToDTO(
            LeaveRecord leave
    ) {

        return LeaveResponseDTO.builder()
                .id(leave.getId())
                .reason(leave.getReason())
                .startDate(leave.getStartDate())
                .endDate(leave.getEndDate())
                .appliedDate(leave.getAppliedDate())
                .status(leave.getStatus())
                .build();
    }
}