package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ApplicationController {
	 
	 @GetMapping("/logout")
	 public String logout() {
		 return "login";
	 }
	 
	 @GetMapping("/index")
	 public String goHome() {
		 return "index";
	 }
}
