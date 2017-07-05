package com.taskmanager.DAO;

import com.taskmanager.Entity.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Daniel on 27.06.2017.
 */
@Repository
public class CacheTaskDao implements TaskDao {

    private Map<Integer, Task> taskCache;
    private int idCounter = 0;
    private static final Logger log = LoggerFactory.getLogger(TaskDao.class);

    public CacheTaskDao(){
        this.taskCache = new HashMap<Integer, Task>();
    }

    public Collection<Task> getAllTasks(){
        return this.taskCache.values();
    }

    public Task getTask(int id){
        if(taskCache.containsKey(id)){
            return taskCache.get(id);
        }else{
            return new Task(-1,null,null,null,null,null,null,0,null);
        }
    }

    public Task addTask(Task task){
        task.setId(idCounter);
        this.taskCache.put(idCounter++, task);
        log.info("persisted task with the id: " + idCounter);
        return task;
    }

    public boolean updateTask(Task task){
        if(taskCache.containsKey(task.getId())){
            taskCache.put(task.getId(), task);
            return true;
        }else{
            return false;
        }
    }

    public boolean deleteTask(Task task){
        if(taskCache.containsKey(task.getId())){
            taskCache.remove(task.getId());
            return true;
        }else{
            return false;
        }
    }

}
