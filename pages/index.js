import styles from '../styles/Home.module.css'
import Head from "next/head"
import { Component } from 'react'
import Layout from '../components/Layout'

const Index = ({ title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to my blog!</h1>
      <p className="description">
        {description}
      </p>
      <main>
        Posts go here!
      </main>
    </Layout>)
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../content/siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}