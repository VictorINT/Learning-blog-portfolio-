package com.example.blog.model;

import jakarta.persistence.*;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 500)
    private String content;

    @Lob
    private String htmlfile;

    // Constructor gol necesar pentru JPA
    public Post() {}

    // Constructor cu parametri
    public Post(String title, String content, String htmlfile) {
        this.title = title;
        this.content = content;
        this.htmlfile = htmlfile;
    }

    // Getters și setters
    // id
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    // title
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    // description
    public String getContent(){
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }
    //! HTML
    // get
    public String getHtmlFile(){
        return htmlfile;
    }
    // put/post
    public void setHtmlFile(String htmlfile){
        this.htmlfile = htmlfile;
    }
}
