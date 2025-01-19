const { Queue } = require("bullmq");

const notificationQueue = new Queue("notification", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

async function init() {
  const result = await notificationQueue.add("sendEmail", {
    to: "deepak@gmail.com",
    subject: "Hi, Deepak",
    body: "This is a test email",
  });
  console.log("Job added: ", "for id:", result.id, { result });
}

init();
