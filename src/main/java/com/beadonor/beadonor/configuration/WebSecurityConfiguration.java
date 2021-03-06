package com.beadonor.beadonor.configuration;

import com.beadonor.beadonor.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter{

    @Autowired
    private AuthService authService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/" , "/images/**" , 
                "/attachments/**", 
                "/css/**", "/js/**", 
                "/auth/**", 
                "/api/v1/static/**",
                "/api/v1/location/**",
                "/api/v1/users/**",
                "/api/v1/auth/**" ,
                "/campaign/**", "/api/v1/campaign/**",
                "/gallery/**", "/api/v1/gallery/**", 
                "/about/**", "/donors/**").permitAll()
            .antMatchers("/api/v1/issue/**", "/moderator/**").hasAuthority("MODERATOR")
            .antMatchers("/admin/**", "/api/v1/admin/**").hasAuthority("ADMIN")
            .anyRequest().authenticated()
            .and().formLogin().loginPage("/auth/login")
            .defaultSuccessUrl("/")
            .permitAll()
            .and()
            .logout()
            .permitAll()
            .and().httpBasic();
            ;
    }

    // @Bean
    // public BCryptPasswordEncoder bCryptPasswordEncoder(){
    //     return new BCryptPasswordEncoder();
    // }
    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    public AuthenticationManager customAuthenticationManager() throws Exception {
        return authenticationManager();
    }
    
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        // auth.userDetailsService(authService).passwordEncoder(bCryptPasswordEncoder());
        auth.userDetailsService(authService);
    }


}
