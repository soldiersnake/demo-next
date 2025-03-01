import Messages from "@/components/messages/Messages";
import Link from "next/link";

const MessagesPage = () => {
  const messages = [
    {
      name: "Han Solo",
      username: "Hsolo",
      message: "Segundo mensaje",
      repliesCount: 13,
    },
    {
      name: "Anakin Skywalker",
      username: "Anakin",
      message: "Primer mensaje",
      repliesCount: 13,
    },
  ];
  return (
    <>
      <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8">
          {messages.map((message, index) => (
            <Messages key={index} message={message} />
          ))}
        </section>
      </main>
    </>
  );
};

export default MessagesPage;
