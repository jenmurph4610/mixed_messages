//Mixed Messages Project - Codecademy 
//Author: Jennifer Murphy
//Inception date: 8/20/21
//Last Update:

/*
Bible verse generator
Piece 1: Books of the bible
Piece 2: Chapter
Piece 3: Verse

NOtes: Start with Matthew-John, and add to it later.  
Once logic is set add the rest later. 



*/

function messageGenerator (book, chapter, verse) {
    console.log(`The verse of the day is: ${book} ${chapter}:${verse}`)
}

function bookGenerator () {
    const booksOfBible = ["Matthew", "Mark", "Luke", "John"];
    const bookOfDayIndex = Math.floor(Math.random() * booksOfBible.length )
    return booksOfBible[bookOfDayIndex]
}

function chapterGenerator(bookOfDay) {
    //determines max number of chapters for the chosen book    
    switch (bookOfDay) {
        case "Matthew":
            maxChapter = 28;
            break;
        case "Mark":
            maxChapter = 16;
            break;
        case "Luke":
            maxChapter = 24;
            break;
        case "John":
            maxChapter = 21;
            break;
    }
    let chapterOfDay = 0;
    while (chapterOfDay === 0) {
        chapterOfDay = Math.floor(Math.random() * maxChapter);
    }
    return chapterOfDay;
}

function verseGenerator(bookOfDay, chapterOfDay) {
    //keys are chapters and values are # of verses in said chapter
    const matthew = {
        1: 25, 2: 23, 3: 17, 4: 25, 5: 48, 6: 34, 7: 29, 8: 34, 9: 38, 10: 42,
        11: 30, 12: 50, 13: 58, 14: 36, 15: 39, 16: 28, 17: 27, 18: 35, 19: 30,
        20: 34, 21: 46, 22: 46, 23: 39, 24: 51, 25: 46, 26: 75, 27: 66, 28: 20,
    }
    const mark = {
        1: 45, 2: 28, 3: 35, 4: 41, 5: 43, 6: 56, 7: 37, 8: 38, 9: 50, 10: 52,
        11: 33, 12: 44, 13: 37, 14: 72, 15: 47, 16: 20,
    }
    const luke = {
        1: 80, 2: 52, 3: 38, 4: 44, 5: 39, 6: 49, 7: 50, 8: 56, 9: 62, 10: 42,
        11: 54, 12: 59, 13: 35, 14: 35, 15: 32, 16: 31, 17: 37, 18: 43, 19: 48,
        20: 47, 21: 38, 22: 71, 23: 56, 24: 53,
    }
    const john = {
        1: 51, 2: 25, 3: 36, 4: 54, 5: 47, 6: 71, 7: 53, 8: 59, 9: 41, 10: 42,
        11: 57, 12: 50, 13: 38, 14: 31, 15: 27, 16: 33, 17: 26, 18: 40, 19: 42,
        20: 31, 21: 25,
    }
    let verseOfDay;

    if (bookOfDay === "Matthew") {
        let bookObject = matthew;
        verseOfDay = matthew[chapterOfDay];
    }
    if (bookOfDay === "Mark") {
        let bookObject = mark;
        verseOfDay = mark[chapterOfDay];
    }
    if (bookOfDay === "Luke") {
        let bookObject = luke;
        verseOfDay = luke[chapterOfDay];
    }
    if (bookOfDay === "John") {
        let bookObject = john;
        verseOfDay = john[chapterOfDay];
    }
    return verseOfDay;
    
}

//test call
const bookOfDay = bookGenerator();
const chapterOfDay = chapterGenerator(bookOfDay);
const verseOfDay = verseGenerator(bookOfDay, chapterOfDay)
messageGenerator(bookOfDay, chapterOfDay, verseOfDay)
