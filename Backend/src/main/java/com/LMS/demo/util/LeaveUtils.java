package com.LMS.demo.util;

import java.time.DayOfWeek;
import java.time.LocalDate;

public class LeaveUtils {

    private LeaveUtils(){}

    public static long calculateWorkingDays(
            LocalDate startDate,
            LocalDate endDate
    ) {

        long count = 0;

        LocalDate current = startDate;

        while (!current.isAfter(endDate)) {

            if (current.getDayOfWeek() != DayOfWeek.SATURDAY
                    && current.getDayOfWeek() != DayOfWeek.SUNDAY) {

                count++;
            }

            current = current.plusDays(1);
        }

        return count;
    }
}