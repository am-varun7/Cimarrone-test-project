package com.LMS.demo.dto;

import com.LMS.demo.entity.enums.LeaveStatus;
import lombok.Data;

@Data
public class LeaveStatusUpdateDTO {

    private LeaveStatus status;
}