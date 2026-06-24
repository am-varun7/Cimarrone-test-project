package com.LMS.demo.controller;

import com.LMS.demo.dto.LeaveApplyRequestDTO;
import com.LMS.demo.dto.LeaveResponseDTO;
import com.LMS.demo.dto.LeaveStatusUpdateDTO;
import com.LMS.demo.service.LeaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leave")
@RequiredArgsConstructor
public class LeaveController {

    private final LeaveService leaveService;

    @GetMapping("/history")
    public List<LeaveResponseDTO> getLeaveHistory(
            @RequestParam Long employeeId
    ) {
        return leaveService.getEmployeeLeaves(employeeId);
    }

    @PostMapping("/apply")
    public LeaveResponseDTO applyLeave(
            @RequestParam Long employeeId,
            @RequestBody LeaveApplyRequestDTO request
    ) {
        return leaveService.applyLeave(
                employeeId,
                request
        );
    }

    @PutMapping("/cancel/{id}")
    public LeaveResponseDTO cancelLeave(
            @PathVariable Long id
    ) {
        return leaveService.cancelLeave(id);
    }

    @PutMapping("/{id}")
    public LeaveResponseDTO updateLeaveStatus(
            @PathVariable Long id,
            @RequestBody LeaveStatusUpdateDTO request
    ) {
        return leaveService.updateLeaveStatus(
                id,
                request.getStatus()
        );
    }
}