import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js"
import { EXAMPLES } from "./data.js";
import Header from "./Components/Header.jsx";
import CoreConcept from "./Components/CoreConcept.jsx";
import TabButton from "./Components/TabButtons.jsx";


function App() {
  const [selectedTopic, setSelectedTopic] = useState()

  function clickHandeler(selectedButton) {
    setSelectedTopic(selectedButton)
    // console.log(selectedTopic)
  }

  let tabContent = <p>Please Select a Topic.</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          {EXAMPLES[selectedTopic].code}
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Components</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}
              onSelect={() => clickHandeler('components')}>
              Component
            </TabButton>

            <TabButton isSelected={selectedTopic === 'jsx'}
              onSelect={() => clickHandeler('jsx')}>
              Jsx
            </TabButton>

            <TabButton isSelected={selectedTopic === 'props'}
              onSelect={() => clickHandeler('props')}>
              Props
            </TabButton>

            <TabButton isSelected={selectedTopic === 'state'}
              onSelect={() => clickHandeler('state')}>
              State
            </TabButton>
            {/* <TabButton onSelect={() => clickHandeler('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => clickHandeler('props')}>Props</TabButton>
            <TabButton onSelect={() => clickHandeler('state')}>State</TabButton> */}
          </menu>

          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;



