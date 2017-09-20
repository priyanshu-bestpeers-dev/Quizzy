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
      options:[
      {
      type: String
      }],
      answer: {
        type: [{
          type: Number
        }]
      },
      category:{
      type: String
      },
      difficulty: {
      type: String
      }
});

mongoose.model('Question', QuestionSchema);
