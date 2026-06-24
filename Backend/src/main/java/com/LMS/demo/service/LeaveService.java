package com.LMS.demo.service;

import com.LMS.demo.dto.LeaveApplyRequestDTO;
import com.LMS.demo.dto.LeaveResponseDTO;
import com.LMS.demo.entity.enums.LeaveStatus;

import java.util.List;

public interface LeaveService {

    LeaveResponseDTO applyLeave(
            Long employeeId,
            LeaveApplyRequestDTO request
    );

    LeaveResponseDTO cancelLeave(
            Long leaveId
    );

    LeaveResponseDTO updateLeaveStatus(
            Long leaveId,
            LeaveStatus status
    );

    List<LeaveResponseDTO> getEmployeeLeaves(
            Long employeeId
    );
}