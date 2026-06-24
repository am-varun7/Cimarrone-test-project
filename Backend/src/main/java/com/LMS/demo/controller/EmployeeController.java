package com.LMS.demo.controller;

import com.LMS.demo.dto.EmployeeResponseDTO;
import com.LMS.demo.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping("/profile")
    public EmployeeResponseDTO getProfile(
            @RequestParam Long employeeId
    ) {
        return employeeService.getProfile(employeeId);
    }
}