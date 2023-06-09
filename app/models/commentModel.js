const mongoose = require('mongoose');

const { Schema, model } = mongoose;


// 评论：
const commentsSchema = new Schema({
  id: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  blogId: { type: Schema.Types.ObjectId, ref: "Blog" },
  content: String,
  createTime: String,
  reply: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    createTime: String
  }]
},{
  versionKey: false
});

const Comments = model('Comments', commentsSchema);

module.exports = Comments;