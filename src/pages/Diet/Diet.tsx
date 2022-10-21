import React from 'react'
import { motion } from 'framer-motion'
import ArticleHeader from '../../components/DietHeader/DietHeader'
import './Diet.scss'

function Diet() {
  return (
    <article id="diet">
      <motion.div
        initial={{
          scale: 0.97,
          opacity: 0.4
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 0.7
        }}
      >
        <ArticleHeader />
      </motion.div>
    </article>
  )
}

export default Diet