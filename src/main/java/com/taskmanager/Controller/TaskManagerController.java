package com.taskmanager.Controller;

import com.taskmanager.Entity.Task;
import com.taskmanager.Service.TaskManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * Created by Daniel on 27.06.2017.
 */
@RestController
@RequestMapping("task")
public class TaskManagerController {

    @Autowired
    private TaskManagerService taskManagerService;

    @RequestMapping(method = RequestMethod.GET)
    public Collection<Task> getAllTasks(){
        return this.taskManagerService.getAllTasks();
    }



}
