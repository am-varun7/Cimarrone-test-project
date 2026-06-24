package com.LMS.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> handleResourceNotFound(
            ResourceNotFoundException ex
    ) {
        return Map.of(
                "message",
                ex.getMessage()
        );
    }

    @ExceptionHandler(EmailAlreadyExistsException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, String> handleEmailExists(
            EmailAlreadyExistsException ex
    ) {
        return Map.of(
                "message",
                ex.getMessage()
        );
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, String> handleGeneric(
            Exception ex
    ) {
        return Map.of(
                "message",
                ex.getMessage()
        );
    }

    @ExceptionHandler(BusinessException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String,String> handleBusinessException(
            BusinessException ex
    ){
        return Map.of(
                "message",
                ex.getMessage()
        );
    }
}