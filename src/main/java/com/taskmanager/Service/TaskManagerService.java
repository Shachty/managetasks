package com.taskmanager.Service;

import com.taskmanager.DAO.TaskDao;
import com.taskmanager.Entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.LinkedList;
import java.util.Queue;

/**
 * Created by Daniel on 27.06.2017.
 */
@Service
public class TaskManagerService {

    @Autowired
    private TaskDao taskDao;
    private Queue<Task> taskQueue;

    public TaskManagerService(){
        this.taskQueue = new LinkedList<>();
    }

    public Collection<Task> getAllTasks(){
        return this.taskDao.getAllTasks();
    }

    public Task getTask(int id){
        return taskDao.getTask(id);
    }

    public void addTask(Task task){
        taskQueue.offer(task);
    }

    public boolean updateTask(Task task){
        return taskDao.updateTask(task);
    }

    public boolean deleteTask(Task task){
        return taskDao.deleteTask(task);
    }

    @Scheduled(fixedRate = 5000)
    private void persisQueuedTasks(){
        while(!taskQueue.isEmpty()){
            taskDao.addTask(taskQueue.poll());
        }
    }
}
