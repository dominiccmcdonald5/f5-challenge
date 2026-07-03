import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import nonogramImage from './assets/nonogram.png'

type Star = {
  id: number
}

const stars: Star[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
]

function HomePage() {
  return (
    <main className="layout">
      <header className="hero">
        <p className="eyebrow">Star Hunt Challenge</p>
        <h1>Find All 10 Stars</h1>
        <p>
          Pick a star page to start exploring. Each page gives you one location of the star.
        </p>
        <div className="detail-panel">
          <h2>How To Confirm A Star</h2>
          <p className="main-star-symbol" aria-hidden="true">★</p>
          <p className="hint">
            This is what a star looks like. They might be a different color based upon the location!
          </p>
          <p className="hint">
            After you find one, take a screenshot showing the full star on screen.
          </p>
          <p className="hint">
            Send your screenshot in Discord, you have 2 hours max
          </p>
        </div>
      </header>

      <section className="card-grid" aria-label="Star pages">
        {stars.map((star) => (
          <Link className="star-card" key={star.id} to={`/star/${star.id}`}>
            <span className="badge">Location {star.id}</span>
            <h2>Star Location {star.id}</h2>
          </Link>
        ))}
      </section>
    </main>
  )
}

function StarPage() {
  const { id } = useParams<{ id: string }>()
  const starId = Number(id)
  const star = stars.find((item) => item.id === starId)
  const starOneScrollHeight = 380000
  const [showStarWidget, setShowStarWidget] = useState(false)
  const [showTimedStar, setShowTimedStar] = useState(false)
  const [clearedPanels, setClearedPanels] = useState<number[]>([])
  const [keypadInput, setKeypadInput] = useState('')
  const [keypadUnlocked, setKeypadUnlocked] = useState(false)
  const [keypadError, setKeypadError] = useState(false)
  const [locationNineFrame, setLocationNineFrame] = useState(0)
  const starSixMessage = `1. Nairobi.... in season 4, I adored you. You were one of my favorite players in that season. You weren't afraid to make big moves and you were able to socially position yourself in great spots. Even though you were not gonna win, I still respected your game. However, this season... I hated your game with a burning passion. To say that you played terrible is an ABSOLUTE understatement. You see, in season 4 at least you had a shot at winning with 1 F3 situation. In this season, you lose against EVERYONE! People like Tonight can easily sweep the jury against you. You were horrible. You said you were gonna come here and cause drama, be a big character, and make big moves. I did not hear you say you were gonna be rude, disrespectful, and have a worse jury management than season 4. The sad thing is that at least you can respect Carson because he was annoying but at least he had a great strategical game, you didn't. Let us start off with the Mazayra tribe, you were going home. You were so untrustworthy that people were gonna take you out over Tonight. Your swap Mazayra I do have some respect for you in surviving the Tony vote, but then you played abysmally right after. The fact that you misplayed 2 idols is sad. If you didn't play Justin's idol on yourself at the Josh boot, Ben wouldn't have played their idol. It was horrible strategy. Coming into the merge, straight away... you lost 6 WHOLE JURY VOTES! You were so disrespectful to those people that there was no way you were winning. You came into the next few votes and you lost EVEN MORE VOTES! Your social game deserves a 0/10. The only reason why people kept you was because they knew they could beat you in the end, not because you were able to connect with them. You survived many votes not because of your own doing but because of Liam's F11 mistake, rocks, and idol plays.
2. Nairobi, at least you can say now that you are the biggest villain of this org. Just know, you got it for ALL of the wrong reasons. I am extremely dissapointed in how you played this season.`

  if (!star) {
    return <Navigate to="/" replace />
  }

  const previousId = star.id === 1 ? 10 : star.id - 1
  const nextId = star.id === 10 ? 1 : star.id + 1

  const hiddenStarStyle = useMemo(() => {
    const hiddenTop = Math.floor(Math.random() * (starOneScrollHeight - 1200)) + 600
    const hiddenLeft = Math.floor(Math.random() * 70) + 10

    return {
      top: `${hiddenTop}px`,
      left: `${hiddenLeft}%`,
    }
  }, [starOneScrollHeight])

  const winningButton = useMemo(() => {
    return Math.floor(Math.random() * 500) + 1
  }, [star.id])

  const starSixCode = useMemo(() => {
    const message = starSixMessage.toLowerCase()
    const countLetter = (letter: string) => {
      return message.split('').filter((character) => character === letter).length
    }

    return `${countLetter('a')}${countLetter('s')}${countLetter('f')}${countLetter('k')}`
  }, [starSixMessage])

  const locationNineImages = useMemo(
    () => [
      'https://picsum.photos/seed/f5-night-1/1000/620',
      'https://picsum.photos/seed/f5-night-2/1000/620',
      'https://picsum.photos/seed/f5-night-3/1000/620',
      'https://picsum.photos/seed/f5-night-4/1000/620',
      'https://picsum.photos/seed/f5-night-5/1000/620',
      'https://picsum.photos/seed/f5-night-6/1000/620',
      'https://picsum.photos/seed/f5-night-7/1000/620',
      'https://picsum.photos/seed/f5-night-8/1000/620',
      'https://picsum.photos/seed/f5-night-9/1000/620',
      'https://picsum.photos/seed/f5-night-10/1000/620',
      'https://picsum.photos/seed/f5-night-11/1000/620',
      'https://picsum.photos/seed/f5-night-12/1000/620',
      'https://picsum.photos/seed/f5-night-13/1000/620',
      'https://picsum.photos/seed/f5-night-14/1000/620',
      'https://picsum.photos/seed/f5-night-15/1000/620',
      'https://picsum.photos/seed/f5-night-16/1000/620',
      'https://picsum.photos/seed/f5-night-17/1000/620',
      'https://picsum.photos/seed/f5-night-18/1000/620',
      'https://picsum.photos/seed/f5-night-19/1000/620',
      'https://picsum.photos/seed/f5-night-20/1000/620',
      'https://picsum.photos/seed/f5-night-21/1000/620',
      'https://picsum.photos/seed/f5-night-22/1000/620',
      'https://picsum.photos/seed/f5-night-23/1000/620',
      'https://picsum.photos/seed/f5-night-24/1000/620',
      'https://picsum.photos/seed/f5-night-25/1000/620',
      'https://picsum.photos/seed/f5-night-26/1000/620',
      'https://picsum.photos/seed/f5-night-27/1000/620',
      'https://picsum.photos/seed/f5-night-28/1000/620',
      'https://picsum.photos/seed/f5-night-29/1000/620',
      'https://picsum.photos/seed/f5-night-30/1000/620',
      'https://picsum.photos/seed/f5-night-31/1000/620',
      'https://picsum.photos/seed/f5-night-32/1000/620',
      '/Screenshot 2060-07-03 022457.png',
    ],
    [],
  )

  const locationNineSlides = useMemo(() => [...locationNineImages], [locationNineImages])

  const locationNineCurrentImage = locationNineSlides[locationNineFrame % locationNineSlides.length]
  const isLocationNineStarFrame = locationNineCurrentImage === '/Screenshot 2060-07-03 022457.png'

  const handleChallengeButtonClick = (buttonNumber: number) => {
    if (buttonNumber === winningButton) {
      setShowStarWidget(true)
      return
    }
  }

  const handlePanelClick = (panelNumber: number) => {
    setClearedPanels((previous) => {
      if (previous.includes(panelNumber)) {
        return previous
      }

      return [...previous, panelNumber]
    })
  }

  const handleKeypadDigit = (digit: string) => {
    setKeypadInput((previous) => {
      if (previous.length >= 10) {
        return previous
      }

      return `${previous}${digit}`
    })
    setKeypadError(false)
  }

  const handleKeypadBackspace = () => {
    setKeypadInput((previous) => previous.slice(0, -1))
    setKeypadError(false)
  }

  const handleKeypadClear = () => {
    setKeypadInput('')
    setKeypadError(false)
  }

  const handleKeypadUnlock = () => {
    if (keypadInput === starSixCode) {
      setKeypadUnlocked(true)
      setKeypadError(false)
      return
    }

    setKeypadUnlocked(false)
    setKeypadError(true)
  }

  useEffect(() => {
    setShowStarWidget(false)
    setShowTimedStar(false)
    setClearedPanels([])
    setKeypadInput('')
    setKeypadUnlocked(false)
    setKeypadError(false)
    setLocationNineFrame(0)

    if (star.id !== 3) {
      return
    }

    const revealTimer = window.setTimeout(() => {
      setShowTimedStar(true)
    }, 30000)

    const hideTimer = window.setTimeout(() => {
      setShowTimedStar(false)
    }, 35000)

    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(hideTimer)
    }
  }, [star.id])

  useEffect(() => {
    if (star.id !== 9) {
      return
    }

    const slideshowInterval = window.setInterval(() => {
      setLocationNineFrame((previous) => previous + 1)
    }, 1000)

    return () => {
      window.clearInterval(slideshowInterval)
    }
  }, [star.id])

  const allPanelsCleared = clearedPanels.length === 100

  if (star.id === 1) {
    return (
      <main className="layout">
        <section className="star-detail">
          <p className="eyebrow">Location Page {star.id} of 10</p>
          <h1>Star Location {star.id}</h1>

          <section
            className="scroll-hunt"
            aria-label="Massive star search area"
            style={{ minHeight: `${starOneScrollHeight}px` }}
          >
            <div className="scroll-lane" aria-hidden="true" />
            <p className="hidden-scroll-star" style={hiddenStarStyle} aria-label="Hidden collectible star">
              ★
            </p>
          </section>

          <nav className="actions" aria-label="Star page navigation">
            <Link className="action-link" to={`/star/${previousId}`}>
              Previous Star
            </Link>
            <Link className="action-link home" to="/">
              Back To Map
            </Link>
            <Link className="action-link" to={`/star/${nextId}`}>
              Next Star
            </Link>
          </nav>
        </section>
      </main>
    )
  }

  if (star.id === 3) {
    return (
      <main className="layout">
        <section className="star-detail">
          <p className="eyebrow">Location Page {star.id} of 10</p>
          <h1>Star Location {star.id}</h1>

          <section className="timed-star-zone" aria-label="Timed star reveal">
            {showTimedStar && (
              <p className="timed-star" aria-label="Timed star collectible">
                ★
              </p>
            )}
          </section>

          <nav className="actions" aria-label="Star page navigation">
            <Link className="action-link" to={`/star/${previousId}`}>
              Previous Star
            </Link>
            <Link className="action-link home" to="/">
              Back To Map
            </Link>
            <Link className="action-link" to={`/star/${nextId}`}>
              Next Star
            </Link>
          </nav>
        </section>
      </main>
    )
  }

  if (star.id === 4) {
    return (
      <main className="layout">
        <section className="star-detail">
          <p className="eyebrow">Location Page {star.id} of 10</p>
          <h1>Star Location {star.id}</h1>

          <section className="panel-challenge" aria-label="Panel clearing challenge">
            {!allPanelsCleared && (
              <div className="panel-grid">
                {Array.from({ length: 100 }, (_, index) => {
                  const panelNumber = index + 1

                  if (clearedPanels.includes(panelNumber)) {
                    return null
                  }

                  return (
                    <button
                      key={panelNumber}
                      className="panel-tile"
                      type="button"
                      aria-label={`Panel ${panelNumber}`}
                      onClick={() => handlePanelClick(panelNumber)}
                    />
                  )
                })}
              </div>
            )}

            {allPanelsCleared && (
              <div className="panel-star-reveal">
                <img src="/star-reference.svg" alt="Star collectible" />
              </div>
            )}
          </section>

          <nav className="actions" aria-label="Star page navigation">
            <Link className="action-link" to={`/star/${previousId}`}>
              Previous Star
            </Link>
            <Link className="action-link home" to="/">
              Back To Map
            </Link>
            <Link className="action-link" to={`/star/${nextId}`}>
              Next Star
            </Link>
          </nav>
        </section>
      </main>
    )
  }

  if (star.id === 5) {
    return (
      <main className="layout">
        <section className="star-detail">
          <p className="eyebrow">Location Page {star.id} of 10</p>
          <h1>Star Location {star.id}</h1>

          <section className="external-challenge" aria-label="Star puzzle challenge">
            <h2>Star Sliding Puzzle</h2>
            <p className="hint">
              Complete the puzzle here:
            </p>
            <a
              className="puzzle-link"
              href="https://www.proprofsgames.com/ugc/puzzle/sliding/star-186/"
              target="_blank"
              rel="noreferrer"
            >
              Open The Star Sliding Puzzle
            </a>
            <p className="hint">
              After you complete it, send a screenshot of the finished puzzle!
            </p>
          </section>

          <nav className="actions" aria-label="Star page navigation">
            <Link className="action-link" to={`/star/${previousId}`}>
              Previous Star
            </Link>
            <Link className="action-link home" to="/">
              Back To Map
            </Link>
            <Link className="action-link" to={`/star/${nextId}`}>
              Next Star
            </Link>
          </nav>
        </section>
      </main>
    )
  }

  if (star.id === 6) {
    return (
      <main className="layout">
        <section className="star-detail">
          <p className="eyebrow">Location Page {star.id} of 10</p>
          <h1>Star Location {star.id}</h1>

          <section className="keypad-challenge" aria-label="Keypad lock challenge">
            <h2>Keypad Lock (Shout out to my opinion for Uzi back in OG Domvivor S6)</h2>
            <p className="cipher-text">{starSixMessage}</p>
            <p className="hint">Put these numbers together to get the correct code:</p>
            <p className="hint">1. Number of A&apos;s in the message</p>
            <p className="hint">2. Number of S&apos;s in the message</p>
            <p className="hint">3. Number of F&apos;s in the message</p>
            <p className="hint">4. Number of K&apos;s in the message</p>

            <p className="keypad-display" aria-live="polite">
              {keypadInput || 'Enter code'}
            </p>

            <div className="keypad-grid" role="group" aria-label="Numeric keypad">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((digit) => (
                <button
                  key={digit}
                  className="keypad-button"
                  type="button"
                  onClick={() => handleKeypadDigit(digit)}
                >
                  {digit}
                </button>
              ))}
              <button className="keypad-button action" type="button" onClick={handleKeypadBackspace}>
                Backspace
              </button>
              <button className="keypad-button action" type="button" onClick={handleKeypadClear}>
                Clear
              </button>
            </div>

            <button className="unlock-button" type="button" onClick={handleKeypadUnlock}>
              Unlock
            </button>

            {keypadError && <p className="keypad-error">Incorrect code. Try again.</p>}

            {keypadUnlocked && (
              <div className="keypad-star-reveal" aria-label="Unlocked star">
                <p className="keypad-star" aria-hidden="true">★</p>
                <p>Star unlocked.</p>
              </div>
            )}
          </section>

          <nav className="actions" aria-label="Star page navigation">
            <Link className="action-link" to={`/star/${previousId}`}>
              Previous Star
            </Link>
            <Link className="action-link home" to="/">
              Back To Map
            </Link>
            <Link className="action-link" to={`/star/${nextId}`}>
              Next Star
            </Link>
          </nav>
        </section>
      </main>
    )
  }

  if (star.id === 7) {
    return (
      <main className="layout">
        <section className="star-detail">
          <p className="eyebrow">Location Page {star.id} of 10</p>
          <h1>Star Location {star.id}</h1>

          <section className="external-challenge" aria-label="Star puzzle challenge">
            <h2>Gold Star Symbol Puzzle</h2>
            <p className="hint">
              Complete the puzzle here:
            </p>
            <a
              className="puzzle-link"
              href="https://www.jigsawplanet.com/?rc=play&pid=147aa4fe2fd7"
              target="_blank"
              rel="noreferrer"
            >
              Open The Gold Star Symbol Puzzle
            </a>
            <p className="hint">
              After you complete it, send a screenshot of the finished puzzle!
            </p>
          </section>

          <nav className="actions" aria-label="Star page navigation">
            <Link className="action-link" to={`/star/${previousId}`}>
              Previous Star
            </Link>
            <Link className="action-link home" to="/">
              Back To Map
            </Link>
            <Link className="action-link" to={`/star/${nextId}`}>
              Next Star
            </Link>
          </nav>
        </section>
      </main>
    )
  }

  if (star.id === 8) {
    return (
      <main className="layout">
        <section className="star-detail">
          <p className="eyebrow">Location Page {star.id} of 10</p>
          <h1>Star Location {star.id}</h1>

          <section className="external-challenge" aria-label="Star nonogram challenge">
            <h2>Nonogram Challenge</h2>
            <p className="hint">Use the nonogram image for this location and complete it.</p>
            <img
              className="nonogram-preview"
              src={nonogramImage}
              alt="Nonogram puzzle grid with row and column clues"
            />
            <p className="hint">Take a wild guess on what the solution looks like.</p>
            <p className="hint">After you complete it, send a screenshot of the finished nonogram!</p>
          </section>

          <nav className="actions" aria-label="Star page navigation">
            <Link className="action-link" to={`/star/${previousId}`}>
              Previous Star
            </Link>
            <Link className="action-link home" to="/">
              Back To Map
            </Link>
            <Link className="action-link" to={`/star/${nextId}`}>
              Next Star
            </Link>
          </nav>
        </section>
      </main>
    )
  }

  if (star.id === 9) {
    return (
      <main className="layout">
        <section className="star-detail">
          <p className="eyebrow">Location Page {star.id} of 10</p>
          <h1>Star Location {star.id}</h1>

          <section className="location-nine-showcase" aria-label="Rotating image showcase">
            <img
              className="location-nine-image"
              src={locationNineCurrentImage}
              alt={isLocationNineStarFrame ? 'Screenshot containing the star' : 'Rotating challenge frame'}
            />
            <p className="hint">
              Watch closely until the star appears, then screenshot it.
            </p>
          </section>

          <nav className="actions" aria-label="Star page navigation">
            <Link className="action-link" to={`/star/${previousId}`}>
              Previous Star
            </Link>
            <Link className="action-link home" to="/">
              Back To Map
            </Link>
            <Link className="action-link" to={`/star/${nextId}`}>
              Next Star
            </Link>
          </nav>
        </section>
      </main>
    )
  }

  if (star.id === 10) {
    return (
      <main className="layout">
        <section className="star-detail">
          <p className="eyebrow">Location Page {star.id} of 10</p>
          <h1>Star Location {star.id}</h1>

          <section className="external-challenge" aria-label="Pen and paper challenge">
            <p className="hint">Using Pen and Paper, draw a star and send a photo of it</p>
          </section>

          <nav className="actions" aria-label="Star page navigation">
            <Link className="action-link" to={`/star/${previousId}`}>
              Previous Star
            </Link>
            <Link className="action-link home" to="/">
              Back To Map
            </Link>
            <Link className="action-link" to={`/star/${nextId}`}>
              Next Star
            </Link>
          </nav>
        </section>
      </main>
    )
  }

  return (
    <main className="layout">
      <section className="star-detail">
        <p className="eyebrow">Location Page {star.id} of 10</p>
        <h1>Star Location {star.id}</h1>

        <section className="button-challenge" aria-label="Star button challenge">
          <p className="hint">
          </p>
          <div className="button-grid">
            {Array.from({ length: 500 }, (_, index) => {
              const buttonNumber = index + 1

              return (
                <button
                  key={buttonNumber}
                  className="challenge-button"
                  type="button"
                  onClick={() => handleChallengeButtonClick(buttonNumber)}
                >
                  {buttonNumber}
                </button>
              )
            })}
          </div>
        </section>

        {showStarWidget && (
          <div className="star-widget-overlay" role="dialog" aria-modal="true" aria-label="Star found widget">
            <div className="star-widget">
              <p className="widget-star" aria-hidden="true">★</p>
              <h2>Star Found</h2>
              <button className="close-widget" type="button" onClick={() => setShowStarWidget(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        <nav className="actions" aria-label="Star page navigation">
          <Link className="action-link" to={`/star/${previousId}`}>
            Previous Star
          </Link>
          <Link className="action-link home" to="/">
            Back To Map
          </Link>
          <Link className="action-link" to={`/star/${nextId}`}>
            Next Star
          </Link>
        </nav>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/star/:id" element={<StarPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
