package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class indexController {
	@RequestMapping(value = "/home")
	public String getHomePage() {
		return "home";
	}
	@RequestMapping(value = "/index")
	public String getIndexPage() {
		return "index";
	}
}
