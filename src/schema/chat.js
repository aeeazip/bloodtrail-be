import mongoose from "mongoose";

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const chatSchema = new Schema({
  // 채팅방
  chatRoom: {
    type: ObjectId,
    required: true,
    ref: "ChatRoom",
  },
  // 채팅 작성자
  writer: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  // 메시지
  message: {
    type: String,
    required: false,
  },
  // 이미지 (S3 업로드 URL)
  image: {
    type: String,
    required: false,
  },
  // 생성일
  created_at: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
