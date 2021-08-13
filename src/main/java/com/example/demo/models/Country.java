package com.example.demo.models;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


import lombok.Data;



	@Entity
	@Data
	@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
	public class Country {
		
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;
		
		@Column(name = "Code")
		private String code;
		@Column(name = "Capital")
		private String capital;
		@Column(name = "Description")
		private String description;
		@Column(name = "Nationality")
		private String nationality;
		@Column(name = "Continent")
		private String continent;
		
		@OneToMany(mappedBy="country")
		private List<State> states;
        
		
		public Country() {
			
		}
        
		public Country(String code, String capital, String description, String nationality, String continent,
				List<State> states) {
			this.code = code;
			this.capital = capital;
			this.description = description;
			this.nationality = nationality;
			this.continent = continent;
			this.states = states;
		}
        
		public void setId(int id) {
			this.id = id;
		}

		public int getId() {
			return id;
		}

		public String getCode() {
			return code;
		}

		public void setCode(String code) {
			this.code = code;
		}

		public String getCapital() {
			return capital;
		}

		public void setCapital(String capital) {
			this.capital = capital;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public String getNationality() {
			return nationality;
		}

		public void setNationality(String nationality) {
			this.nationality = nationality;
		}

		public String getContinent() {
			return continent;
		}

		public void setContinent(String continent) {
			this.continent = continent;
		}

		public List<State> getStates() {
			return states;
		}

		public void setStates(List<State> states) {
			this.states = states;
		}
		
		
}
