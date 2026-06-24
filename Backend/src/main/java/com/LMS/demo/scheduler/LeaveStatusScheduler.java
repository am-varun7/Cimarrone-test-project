package com.LMS.demo.scheduler;

import com.LMS.demo.entity.LeaveRecord;
import com.LMS.demo.entity.enums.LeaveStatus;
import com.LMS.demo.repository.LeaveRecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
@RequiredArgsConstructor
public class LeaveStatusScheduler {

    private final LeaveRecordRepository leaveRepository;

    @Scheduled(cron = "0 0 0 * * *")
    public void autoRejectExpiredLeaves() {

        List<LeaveRecord> pendingLeaves =
                leaveRepository.findByStatus(
                        LeaveStatus.PENDING
                );

        LocalDate today = LocalDate.now();

        for(LeaveRecord leave : pendingLeaves){

            if(today.isAfter(
                    leave.getStartDate()
            )){
                leave.setStatus(
                        LeaveStatus.REJECTED
                );
            }
        }

        leaveRepository.saveAll(
                pendingLeaves
        );
    }
}