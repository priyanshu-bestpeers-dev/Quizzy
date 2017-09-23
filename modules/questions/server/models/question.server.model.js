'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Question Schema
 */
var QuestionSchema = new Schema({
  question: {
    type: String,
    default: '',
    required: 'Please fill Question name',
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
  options: [{
    option: {
      type: String,
      default: '',
      trim: true
    },
    isCorrect: {
      type: Boolean,
      default: false
    }
  }],
  category: {
    type: String
  },
  difficulty: {
    type: String
  },
  questionType: {
    type: String
  }
});

mongoose.model('Question', QuestionSchema);
