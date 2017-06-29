package com.taskmanager.Service;

import com.taskmanager.Entity.Status;
import com.taskmanager.Entity.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Random;

/**
 * Created by Daniel on 27.06.2017.
 */
@Component
public class TaskGenerator {

    private Random randomGenerator;
    private int counter;
    private String description = "Generated Task #";
    private static final Logger log = LoggerFactory.getLogger(TaskGenerator.class);

    public TaskGenerator(){
        this.randomGenerator = new Random();
        counter = 0;
    }

    public Task generateTask(){

        LocalDateTime now = LocalDateTime.now();

        log.info(description + counter);

        return new Task(0,
                now,
                null,
                now.plusMinutes(randomGenerator.nextInt(4320)),
                null,
                TaskTitles.values()[randomGenerator.nextInt(TaskTitles.values().length)].toString(),
                description + counter++,
                randomGenerator.nextInt(5),
                Status.ONHOLD);
    }
}
enum TaskTitles{
    SLEEP, RUN, MAKEMUSIC, CLIMB, COOK, CODE
}
