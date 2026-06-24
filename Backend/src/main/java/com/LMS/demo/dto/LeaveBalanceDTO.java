package com.LMS.demo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LeaveBalanceDTO {

    private long total;

    private long used;

    private long remaining;
}