package com.taskmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableScheduling
public class TaskmanagerApplication {

    ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfiguration.class);
	public static void main(String[] args) {
		SpringApplication.run(TaskmanagerApplication.class, args);
	}

}
