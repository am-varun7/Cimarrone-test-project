package com.LMS.demo.controller;

import com.LMS.demo.dto.EmployeeRequestDTO;
import com.LMS.demo.dto.EmployeeResponseDTO;
import com.LMS.demo.dto.LeaveResponseDTO;
import com.LMS.demo.service.EmployeeService;
import com.LMS.demo.service.LeaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manager")
@RequiredArgsConstructor
public class ManagerController {

    private final EmployeeService employeeService;
    private final LeaveService leaveService;

    @GetMapping("/profile")
    public EmployeeResponseDTO getProfile(
            @RequestParam Long managerId
    ) {
        return employeeService.getProfile(managerId);
    }

    @GetMapping("/employees")
    public List<EmployeeResponseDTO> getEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/employees/{id}/leaves")
    public List<LeaveResponseDTO> getEmployeeLeaves(
            @PathVariable Long id
    ) {
        return leaveService.getEmployeeLeaves(id);
    }

    @PostMapping("/employees")
    public EmployeeResponseDTO createEmployee(
            @RequestBody EmployeeRequestDTO request
    ) {
        return employeeService.createEmployee(request);
    }

    @PutMapping("/employees/{id}")
    public EmployeeResponseDTO updateEmployee(
            @PathVariable Long id,
            @RequestBody EmployeeRequestDTO request
    ) {
        return employeeService.updateEmployee(id, request);
    }
}