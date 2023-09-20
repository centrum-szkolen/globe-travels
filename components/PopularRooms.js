"use client";

import { HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RoomDrawer } from "./RoomDrawer";
import React from "react";

function PopularRooms({ rooms }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentRoom, setCurrentRoom] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);

  const handleDetails = (room) => {
    setCurrentRoom(room);
    setIsOpen(true);
  };

  return (
    <div className="mt-5">
      {rooms.slice(0, 2).map((room) => (
        <Card
          onClick={() => handleDetails(room)}
          key={room.id}
          className="w-full max-w-[48rem] flex-row gap-2 border-solid border-2 rounded-lg mb-4"
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={room.image.url}
              alt={room.title}
              className="h-full w-full object-cover ltr rounded-s-lg"
            />
          </CardHeader>
          <CardBody className="p-3">
            <Typography variant="h6" color="black" className="mb-4 uppercase">
              {room.title}
            </Typography>

            <div className="flex gap-2 mb-4">
              <div>
                <UserGroupIcon width={20} />
              </div>

              <div>
                <span className="text-xs font-bold">Max: </span>
                <span className="text-xs">
                  {room.max} {room.max > 1 ? "dorosłych" : "dorosły"}
                </span>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <div>
                <HomeModernIcon width={20} />
              </div>

              <div>
                <span className="text-xs font-bold">Pomieszczenie: </span>
                <span className="text-xs">{room.accommodation}</span>
              </div>
            </div>

            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Wybierz
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      ))}

      <Button
        className="py-2 mt-3 border-primary"
        variant="outlined"
        onClick={() => setShowAll(true)}
      >
        Pokaż wszystkie pokoje
      </Button>

      <RoomDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <header className="p-4 font-bold text-lg">{currentRoom?.title}</header>
        <img
          src={currentRoom?.image.url}
          alt={currentRoom?.title}
          className="w-full object-cover !mt-0"
        />

        <div className="p-5">
          <div className="flex gap-2 mb-4">
            <div>
              <UserGroupIcon width={20} />
            </div>

            <div>
              <span className="text-xs font-bold">Max: </span>
              <span className="text-xs">
                {currentRoom?.max}{" "}
                {currentRoom?.max > 1 ? "dorosłych" : "dorosły"}
              </span>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <div>
              <HomeModernIcon width={20} />
            </div>

            <div>
              <span className="text-xs font-bold">Pomieszczenie: </span>
              <span className="text-xs">{currentRoom?.accommodation}</span>
            </div>
          </div>

          <span className="block text-center mb-3 text-blue-500 font-bold text-lg">
            {currentRoom?.extraFee === 0
              ? "bez dopłaty"
              : `+${currentRoom?.extraFee} zł/pokój`}
          </span>

          <hr />

          <div className="my-3">
            <span className="text-xs font-bold">Łazienka: </span>
            <span className="text-xs">{currentRoom?.bathroom}</span>
          </div>
          <div className="my-3">
            <span className="text-xs font-bold">Widok: </span>
            <span className="text-xs">{currentRoom?.view}</span>
          </div>
          <div className="my-3">
            <span className="text-xs font-bold">Wyposażenie: </span>
            <span className="text-xs">{currentRoom?.equipment}</span>
          </div>
        </div>
      </RoomDrawer>

      <RoomDrawer isWide isOpen={showAll} setIsOpen={setShowAll}>
        {rooms.map((room) => (
          <Card
            key={room.id}
            className="w-full flex-row gap-2 border-solid border-2 rounded-lg mb-4"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={room.image.url}
                alt={room.title}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="p-3">
              <Typography variant="h6" color="black" className="mb-4 uppercase">
                {room.title}
              </Typography>

              <div className="flex gap-2 mb-4">
                <div>
                  <UserGroupIcon width={20} />
                </div>

                <div>
                  <span className="text-xs font-bold">Max: </span>
                  <span className="text-xs">
                    {room.max} {room.max > 1 ? "dorosłych" : "dorosły"}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <div>
                  <HomeModernIcon width={20} />
                </div>

                <div>
                  <span className="text-xs font-bold">Pomieszczenie: </span>
                  <span className="text-xs">{room.accommodation}</span>
                </div>
              </div>

              <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                  Wybierz
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>
        ))}
      </RoomDrawer>
    </div>
  );
}

export default PopularRooms;
