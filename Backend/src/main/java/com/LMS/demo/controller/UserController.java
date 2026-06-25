package com.LMS.demo.controller;
import com.LMS.demo.dto.EmployeeResponseDTO;
import com.LMS.demo.security.CustomUserPrincipal;
import com.LMS.demo.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

    private final EmployeeService employeeService;

    @GetMapping("/profile")
    public EmployeeResponseDTO getProfile(
            @AuthenticationPrincipal CustomUserPrincipal user
    ) {
        return employeeService.getProfile(user.getUserId());
    }
}