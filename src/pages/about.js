import React from "react";

export default ({ data }) =>
  <div>
    <h1>
      About {data.site.siteMetadata.title}
    </h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
    <p><b>Interesting fact #1:</b> Pandas can stand upright, but their short hind legs aren’t strong enough to support their bodies. </p>
    <p><b>Interesting fact #2:</b> Pandas are pigeon-toed; in other words, they walk with their front paws turned inward.</p>
    <p><b>Interesting fact #3:</b> A giant panda can peel and eat a bamboo shoot in about 40 seconds.</p>
    <p><b>Interesting fact #4:</b> Keeping even a single panda in a zoo is expensive. A panda costs five times more to keep than the next most expensive animal, an elephant.</p>
    <p><b>Intersting fact #5:</b> Pandas have sometimes been seen rolling down slopes. While they may be playing, they may also be trying to dislodge twigs from their fur.</p>
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`