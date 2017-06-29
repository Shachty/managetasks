package com.taskmanager.Service;

import com.taskmanager.Entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Created by Daniel on 27.06.2017.
 */
@Component
public class Scheduler{

    @Autowired
    TaskManagerService taskManagerService;

    @Autowired
    TaskGenerator taskGenerator;


    @Scheduled(fixedRate = 15000)
    public void createTask(){
    taskManagerService.addTask(taskGenerator.generateTask());
    }
}

