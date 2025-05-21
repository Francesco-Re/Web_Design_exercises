"use strict";
import dayjs from 'dayjs'

function Answer(Response, rUsername, score, date)
{
    this.response = Response;
    this.rUsername = rUsername;
    this.score = score;
    this.date = date;
}

function Question(Username, Question, Date)
{
    this.username = Username;
    this.question = Question;
    this.date = Date;
    this.answers = [];

    this.add = (Answer) => { this.answers.push(Answer); };

    this.find = (Username) => { return this.answers.filter(a => a.rUsername = Username);};

    this.afterDate = (date) => { return this.answers.filter(a => a.date.isAfter(date));};

    this.listByDate = () => { return this.answers.sort((a,b) => b.date.isAfter(a.date));};

    this.listByScore = () => { return this.answers.sort((a, b) => b.score - a.score)};
}


let q = new Question("FR", "Why am I doing this?", dayjs());

let a1 = new Answer("I don't know", "FC", 0, dayjs());
let a2 = new Answer("Because I want to", "FC", 1, dayjs());
let a3 = new Answer("Because I have to", "FC", 2, dayjs());
let a4 = new Answer("Because I like it", "FC", 3, dayjs());

q.add(a1);
q.add(a2);  
q.add(a3);
q.add(a4);
console.log(q.find("FC"));
console.log(q.afterDate(dayjs().subtract(1, 'day')));
console.log(q.listByDate());
console.log(q.listByScore());