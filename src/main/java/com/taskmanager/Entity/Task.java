package com.taskmanager.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.taskmanager.CustomJsonDateDeserializer;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * Created by Daniel on 27.06.2017.
 */

public class Task implements Serializable, Comparable<Task> {

    public int id;
    @JsonFormat(pattern = "dd-MM-yyyy hh:mm")
    @JsonDeserialize(using = CustomJsonDateDeserializer.class)
    public LocalDateTime createdAt;
    @JsonFormat(pattern = "dd-MM-yyyy hh:mm")
    @JsonDeserialize(using = CustomJsonDateDeserializer.class)
    public LocalDateTime updatedAt;
    @JsonFormat(pattern = "dd-MM-yyyy hh:mm")
    @JsonDeserialize(using = CustomJsonDateDeserializer.class)
    public LocalDateTime dueDate;
    @JsonFormat(pattern = "dd-MM-yyyy hh:mm")
    @JsonDeserialize(using = CustomJsonDateDeserializer.class)
    public LocalDateTime resolvedAt;
    private String title;
    private String description;
    private int priority;
    private Status status;


    public Task(int id, LocalDateTime createdAt, LocalDateTime updatedAt, LocalDateTime dueDate, LocalDateTime resolvedAt, String title, String description, int priority, Status status) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.dueDate = dueDate;
        this.resolvedAt = resolvedAt;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
    }

    @Override
    public int compareTo(Task o) {
        if (getDueDate() == null || o.getDueDate() == null) {
            return 0;
        }
        if (getDueDate().toLocalDate().isBefore(o.getDueDate().toLocalDate())) {
            return -1;
        } else {
            if (getDueDate().toLocalDate().isEqual(o.getDueDate().toLocalDate())) {
                //then sort by priority
                if (getPriority() == 0 || o.getPriority() == 0 || getPriority() == o.getPriority()) {
                    return 0;
                } else {
                    if (getPriority() < o.getPriority()) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
            } else {
                return 1;
            }
        }
    }

    public Task() {
    }

    ;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public LocalDateTime getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDateTime dueDate) {
        this.dueDate = dueDate;
    }

    public LocalDateTime getResolvedAt() {
        return resolvedAt;
    }

    public void setResolvedAt(LocalDateTime resolvedAt) {
        this.resolvedAt = resolvedAt;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}





