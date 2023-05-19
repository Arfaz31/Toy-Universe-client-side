import React from "react";

const BlogPage = () => {
  return (
    <div>
      <h1 className="font-bold lg:text-5xl text-2xl mb-12 mt-16 text-gray-700 text-center">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 gap-8 mb-40">
        <div className="w-3/4 mx-auto bg-slate-100 p-12">
          <h1 className="font-bold text-xl text-gray-700 mb-3">
            <strong>Qus: </strong> What is an access token and refresh token?
            How do they work and where should we store them on the client-side?
          </h1>
          <p className="text-base text-gray-600"><strong>Ans: </strong>
          A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <br />
          <br />

          Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks. <br />
          <br />
          There are two common ways to store your tokens. The first is in localStorage and the second is in cookies.   
          </p>
        </div>

        <div className="w-3/4 mx-auto bg-slate-100 p-12">
          <h1 className="font-bold text-xl text-gray-700 mb-3">
            <strong>Qus: </strong>  Compare SQL and NoSQL databases?
          </h1>
          <p className="text-base text-gray-600"><strong>Ans: </strong>
          SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
          </p>
        </div>

        <div className="w-3/4 mx-auto bg-slate-100 p-12">
          <h1 className="font-bold text-xl text-gray-700 mb-3">
            <strong>Qus: </strong> What is express js? What is Nest JS? 
          </h1>
          <p className="text-base text-gray-600"><strong>Ans: </strong>
          Express is a node js web application framework that provides broad features for building web and mobile applications.
          <br />
          NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
          </p>
        </div>

        <div className="w-3/4 mx-auto bg-slate-100 p-12">
          <h1 className="font-bold text-xl text-gray-700 mb-3">
            <strong>Qus: </strong>  What is MongoDB aggregate? and how does it work?
          </h1>
          <p className="text-base text-gray-600"><strong>Ans: </strong>
          Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
          <br />
          NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
