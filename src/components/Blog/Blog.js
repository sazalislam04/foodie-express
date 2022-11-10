import React from "react";
import { Link } from "react-router-dom";
import useSetTitle from "../../useSetTitle/useSetTitle";

const Blog = () => {
  useSetTitle("Blog");
  return (
    <>
      <div className="dark:bg-gray-800 dark:text-gray-100 py-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <Link
              rel="noopener noreferrer"
              to=""
              className="px-2 py-1 font-bold rounded dark:bg-yellow-400 dark:text-gray-900"
            >
              SQL and NoSQL
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              to=""
              className="text-2xl font-bold hover:underline"
            >
              What is Difference between SQL and NoSQL
            </Link>
            <p className="mt-2">
              SQL Databases are categorized as Relational Database Management
              System. NoSQL databases are categorized as Non-relational or
              distributed database system. SQL databases have fixed or static or
              predefined schema. NoSQL databases have dynamic schema. SQL
              databases display data in form of tables so it is known as
              table-based database. NoSQL databases display data as collection
              of key-value pair, documents, graph databases or wide-column
              stores. SQL Vertically Scalable . NoSQL Horizontally scalable
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              to=""
              className="hover:underline dark:text-yellow-400"
            >
              Read more
            </Link>
            <div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="hover:underline dark:text-gray-400">
                  Leroy Jenkins
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100 py-2">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <Link
              rel="noopener noreferrer"
              to=""
              className="px-2 py-1 font-bold rounded dark:bg-yellow-400 dark:text-gray-900"
            >
              JWT
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              to=""
              className="text-2xl font-bold hover:underline"
            >
              What is JWT, and how does it work?
            </Link>
            <p className="mt-2">
              JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
              compact and self-contained way for securely transmitting
              information between parties as a JSON object. This information can
              be verified and trusted because it is digitally signed. JWTs can
              be signed using a secret (with the HMAC algorithm) or a
              public/private key pair using RSA or ECDSA.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              to=""
              className="hover:underline dark:text-yellow-400"
            >
              Read more
            </Link>
            <div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="hover:underline dark:text-gray-400">
                  Leroy Jenkins
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100 py-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <Link
              rel="noopener noreferrer"
              to=""
              className="px-2 py-1 font-bold rounded dark:bg-yellow-400 dark:text-gray-900"
            >
              javascript and NodeJS
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              to=""
              className="text-2xl font-bold hover:underline"
            >
              What is the difference between javascript and NodeJS?
            </Link>
            <p className="mt-2">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language. Javascript is capable enough to
              add HTML and play with the DOM. Nodejs does not have capability to
              add HTML tags.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              to=""
              className="hover:underline dark:text-yellow-400"
            >
              Read more
            </Link>
            <div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="hover:underline dark:text-gray-400">
                  Leroy Jenkins
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100 pt-2 pb-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <Link
              rel="noopener noreferrer"
              to=""
              className="px-2 py-1 font-bold rounded dark:bg-yellow-400 dark:text-gray-900"
            >
              NodeJS
            </Link>
          </div>
          <div className="mt-3">
            <Link
              rel="noopener noreferrer"
              to=""
              className="text-2xl font-bold hover:underline"
            >
              How does NodeJS handle multiple requests at the same time?
            </Link>
            <p className="mt-2">
              NodeJS event loops are only single-threaded. The entire NodeJS
              architecture is not single-threaded. <br />
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              rel="noopener noreferrer"
              to=""
              className="hover:underline dark:text-yellow-400"
            >
              Read more
            </Link>
            <div>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="hover:underline dark:text-gray-400">
                  Leroy Jenkins
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
