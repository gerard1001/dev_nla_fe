"use client";
import Image from "next/image";
import StatusCars from "./components/StatusCars";
import Header from "./components/Header";
import Graph from "./components/Graph";
import Dash from "./components/Dash";
import Page from "./login/page";
import { AuthContext } from "./ContextAPI/Controller";
import { useContext } from "react";
import { Provider } from "react-redux";

export default function Home() {
  const { user } = useContext(AuthContext);
  console.log("X-user", user);

  return (
    <main className="">
      {user != null ? (
        <>
          <div>
            <StatusCars />
            <Graph />

            <div>
              <div className="grid grid-cols-3 my-3">
                <h3 className="font-bold text-lg">Pending Cases</h3>

                <select
                  id="countries"
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>All activity</option>
                  <option value="US">New cases</option>
                  <option value="CA">Old</option>
                  <option value="FR">Sent messages</option>
                  <option value="DE">Events</option>
                </select>
                <select
                  id="countries"
                  className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Create new</option>
                  <option value="US">Case</option>
                  <option value="CA">Notification</option>
                  <option value="FR">Message</option>
                  <option value="DE">Event</option>
                </select>
              </div>
            </div>

            <Dash />
          </div>
        </>
      ) : (
        <>
          <Page />
        </>
      )}
    </main>
  );
}
