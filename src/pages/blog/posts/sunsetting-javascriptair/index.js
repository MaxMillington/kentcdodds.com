import Markdown from '../../../../components/markdown'

export const title = 'Sunsetting JavaScript Air'

export default Post

function Post() {
  return (
    <div style={{maxWidth: 800, margin: 'auto', fontSize: '22px'}}>
      <h1 style={{textAlign: 'center', fontSize: '1.4em'}}>
        🌆 {title} 🌆
        <br />
        <small>for now... 🌇</small>
      </h1>
      <div style={{textAlign: 'center'}}>
        <a href="https://javascriptair.com">
          <img style={{width: '100%', maxWidth: 256}} src="javascript-air-logo.png" />
        </a>
      </div>
      <div>
        <Markdown>{`
          With heavy heart 💔, I must officially announce that I'm sunsetting
          [JavaScript Air](https://javascriptair.com). If you haven't heard of JavaScript Air (I'm surprised you're even
          reading this), it's the **live** broadcast podcast all about JavaScript and the web platform. Learn more about
          the background [here](https://medium.com/@kentcdodds/introducing-javascript-air-46700561f38d).

          On November 2nd, we'll have our last show with [Brendan Eich](https://twitter.com/BrendanEich), the creator of
          JavaScript. It's poetic because he was on [our very first show](http://jsair.io/first) as well. If you haven't
          watched that one, I definitely recommend it!

          A lot of people are asking me why I'm sunsetting the show. Why don't I just hand it off (like I did with
          [AngularAir](http://angularair.com/))? Why don't I just reduce the frequency to every other week or once a
          month? Why change anything at all? Things are going so well!

          I've been podcasting for about two years now. It's been a ton of fun. I've been able to talk to a lot of
          really interesting people about a lot of really interesting things. And I've been able to share those
          conversations with the community which makes it that much more awesome! I've learned a lot from these chats
          with people. And the process of building a show (the website, the community building, the automation for
          production) has been an awesome learning experience as well.

          So why am I sunsetting the show? Well, the other day, my wife took the kids to a concert and all I had to do
          was clean the kitchen really quick so I could start working on a project I am really excited about. Then, I
          realized that I had to do some planning for the upcoming JavaScript Air show. That was the moment I realized
          that there are some other things that I'm more interested in doing with my time. This isn't an isolated
          incident. I've actually been feeling this way for months. I've been neglecting my contributings to Open
          Source, Egghead.io, etc. because I had to do the leg work of preparing for and producing JavaScript Air shows.

          Since I announced the sunset, I've had several people offer to do everything for me, just so I can continue
          hosting the show. While I'm super grateful to these people, it's just not something that I'm interested in
          doing right now. I have a very high attention to detail and worry that I'd end up micro-managing anyone I
          hired to do the behind-the-scenese stuff for the show, which would end up taking more time. I'm just not in a
          place right now to do that.

          I wouldn't say that I'm totally killing the show. Everything's just going to stop going for a while. It is
          definitely possible that I'll start it up again in the future. This is one of the reasons that I'm not handing
          it off to someone else to do for me. So keep following [@JavaScriptAir](https://twitter.com/javascriptair) on
          Twitter and you may see some tweets coming from the account eventually.

          If you're interested in what I'm doing next, I plan on doing more stuff for
          [egghead.io](http://kcd.im/egghead), [Frontend Masters](https://frontendmasters.com/), and I have
          [a project](https://gist.github.com/kentcdodds/e85254d4dbc1540df6b95eb9ad2098d9) that I'm working on and I'm
          really excited about. [Follow me on twitter](https://twitter.com/kentcdodds) to keep up with that :)
        `}</Markdown>
      </div>
      <small>
        See more blogposts from me <a href="/post">here</a>.
      </small>
    </div>
  )
}
