'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Quiz Schema
 */
var QuizSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Quiz name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  questions: [{
    type: Schema.ObjectId,
    ref: 'Question'
  }],
  isMinusMarking: {
    type: Boolean,
    default: false
  },
  quizCategory: {
    type: String
  }
});

mongoose.model('Quiz', QuizSchema);
