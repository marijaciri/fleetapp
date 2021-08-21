package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.services.SecurityService;


@Controller
public class ApplicationController {
	 
	 
	 @GetMapping("/index")
	 public String goHome() {
		 return "index";
	 }
	 
	
}
