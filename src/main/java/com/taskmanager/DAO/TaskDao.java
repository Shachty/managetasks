package com.taskmanager.DAO;

import com.taskmanager.Entity.Task;

import java.util.Collection;

/**
 * Created by Daniel on 29.06.2017.
 */
public interface TaskDao {

    public Collection<Task> getAllTasks();
    public Task getTask(int id);
    public Task addTask(Task task);
    public boolean updateTask(Task task);
    public boolean deleteTask(Task task);
}
