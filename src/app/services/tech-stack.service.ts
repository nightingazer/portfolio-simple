import { Injectable } from '@angular/core';
import { SkillCardData } from '../components/skill-card/skill-card.component';

// LANGUAGES

const TSJS: SkillCardData = {
  title: "TS/JS",
  experience: 5,
  brief: "My first language I've worked with on a commercial project.",
  description: "Some basic foundation with C/C++ I've learned in high school aside, this is my first real language I've worked with professionally. I even enjoyed JS at first, but right now, I have a lot of questions about that whole ecosystem. But it does its job, so I'll tolerate it for a little longer, I guess."
};

const JAVA: SkillCardData = {
  title: "J*va",
  experience: 2,
  brief: "I'm pretty confident with it, but can't say I'm a fan."
}

const BASH: SkillCardData =
{
  title: "Bash",
  experience: 4,
  brief: "Can't imagine my life without it at this point.",
  description: "As Linux became my main OS almost 5 years ago, I really can't imagine my life without that wonderful tool. Although I'm constantly looking for some alternatives, as bash is pretty outdated, I've found no good alternatives that could fill in all the gaps of bash while providing some reasonable user experience."
}

const RUST: SkillCardData = {
  title: "Rust",
  experience: 0,
  brief: "I'm just starting with it, but I'm loving it.",
  description: "Picked it up out of curiosity, fell in love with it as a result. Rust makes me write code in the manner I've always wanted to write code; I just didn't know that I wanted to write code this way."
}

const CPP: SkillCardData = {
  title: "C++",
  experience: 2,
  brief: "Definitely my favorite language. And I'm pretty confident in working with it.",
  description: "Nice language, but an absolutely horrendous dependency management and building experience. I'd rather cut my leg than edit CMakeLists.txt again."
}

const CS: SkillCardData = {
  title: "C#",
  experience: 1,
  brief: "Made a couple of projects with it. Definitely better than J*va.",
  description: "One of the few things Microsoft made decent"
}

const SQL: SkillCardData = {
  title: "SQL",
  experience: 3,
  brief: "Postgres, Oracle, MS, MySQL, any of those and some more",
  description: "I've worked a lot with databases throughout my career. I guess my favorite would be Postgres, but I'm pretty comfortable with any of those. I've worked with Oracle, MS SQL, MySQL, Postgres, SQLite, and maybe some more, but anyway it was not significant enough to remember, so definitely it's not significant enough to add them to this list. I'm pretty comfortable with it."
};

// TECHNOLOGIES

const ANGULAR: SkillCardData = {
  title: "Angular",
  experience: 3,
  brief: "This is the framework I'm absolutely most comfortable with. Loving it.",
  description: "My second-ever-learned frontend framework. I've started with React, but as I've got to know Angular better, I've started to realize that I like Angular's approach more. I like its structure, I like its work with TypeScript out of the box. I like that Angular is not afraid to call itself a framework."
};

const REACT: SkillCardData = {
  title: "React",
  experience: 2,
  brief: "Started my career with it. Pretty good, I like it. But I like Angular better.",
  description: "My first real JS frontend framework (library) I've picked up while working as a frontend developer. I like it; it's pretty fun to work with. Also, I'm constantly refreshing my React knowledge, not to forget it, and also not to narrow my mind as I mostly work with Angular at my job."
};

const SOLIDJS: SkillCardData = {
  title: "Solid.js",
  experience: 1,
  brief: "Pretty nice frontend framework. Also, Signals.",
  description: "Picked it up out of curiosity. I find Solid a pretty nice framework for not so big projects. Very interesting, where this technology will get in the future."
};

const SPRING: SkillCardData = {
  title: "Spring",
  experience: 2,
  brief: "I do have to get in contact with it on a daily basis..."
};

const NESTJS: SkillCardData = {
  title: "NestJS",
  experience: 2,
  brief: "Definitely my favorite JS backend framework.",
  description: "Learned this immediately after Express. As it is very similar to my favorite frontend framework, it's no surprise why it became my favorite backend framework, I guess. Wrote a couple of microservices with it, also sometimes I would make mock endpoints for some new frontend features or to debug something there if I'd find that it would be too tedious to do with Express."
};

const EXPRESS: SkillCardData = {
  title: "Express.js",
  experience: 3,
  brief: "Nice, small, absolute goat when it comes to prototype something quickly.",
  description: "Although this library is known to me for a pretty long time and always is there in the background, I couldn't say I've worked with it a lot professionally. Mainly prototyping for my side projects or making a couple of endpoints to debug some weird frontend or microservice behavior at work. But nevertheless, I believe that's a pretty nice piece of software."
};

const GIT: SkillCardData = {
  title: "Git",
  experience: 4,
  brief: "My absolute love. Loving it much more after working with SVN and TFVC.",
  description: "I've become familiar with Git even before I've started working as a software developer. I really can't see my life without that technology. I'm using it on a daily basis, at work, on my free time, always."
};

const ACTIX: SkillCardData = {
  title: "Actix",
  experience: 0,
  brief: "Making a backend for my real portfolio with it.",
  description: "As I'm learning Rust right now, it would be a shame not to pick up some backend framework for Rust along the way. Right now I've chosen Actix and making the backend for my full version of the portfolio with it. As almost everything in Rust, I find that particular piece of software pretty much enjoyable."
};


@Injectable({
  providedIn: 'root'
})
export class TechStackService {

  constructor() {}

  getFeaturedLangs(): SkillCardData[] {
    return [TSJS, BASH, CPP]
  }

  getFeaturedTechnologies(): SkillCardData[] {
    return [ANGULAR, SPRING, NESTJS]
  }

  getAllTech(): SkillCardData[] {
    return [ANGULAR, NESTJS, SPRING, REACT, EXPRESS, GIT, ACTIX, SOLIDJS]
      .sort((a, b) => b.experience - a.experience)
  }

  getAllLangs(): SkillCardData[] {
    return [TSJS, JAVA, BASH, CPP, RUST, CS, SQL]
      .sort((a, b) => b.experience - a.experience)
  }
}
