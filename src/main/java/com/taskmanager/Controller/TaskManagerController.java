package com.taskmanager.Controller;

import com.taskmanager.Entity.Task;
import com.taskmanager.Service.TaskManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by Daniel on 27.06.2017.
 */
@RestController
@RequestMapping("task")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskManagerController {

    @Autowired
    private TaskManagerService taskManagerService;

    @RequestMapping(method = RequestMethod.GET)
    public Collection<Task> getAllTasks(){
        return this.taskManagerService.getAllTasks();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Task getTask(@PathVariable int id){
        return this.taskManagerService.getTask(id);
    }



}
