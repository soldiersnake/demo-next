import { MessageType } from "@/types/message.types";
import Image from "next/image";
import Link from "next/link";

type MessageProps = {
  message: MessageType;
};

const Messages = ({ message }: MessageProps) => {
  return (
    <>
      <div className="flex">
        <div className="rounded-full p-4 bg-gray-300 w-16 text-center mb-4">
          <span className="font-semibold text-sm">AS</span>
        </div>
        <div className="flex flex-col ml-4 mt-2">
          <div className="flex">
            <h3 className="font-semibold text-md">{message.name}</h3>
            <div className="text-md ml-2 text-gray-600 cursor-pointer">
              @
              <Link href={`/users/${message.username}`}>
                {message.username}
              </Link>
            </div>
          </div>
          <p>{message.message}</p>
          <div>
            <Image
              className="rounded-full"
              src={
                "https://m.media-amazon.com/images/I/71om09rH+HL._AC_UL480_FMwebp_QL65_.jpg"
              }
              alt="Picture of the author"
              width={130}
              height={130}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
