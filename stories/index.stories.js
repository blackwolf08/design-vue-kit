
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../src/components/Button.vue';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('Esempi', () => ({
    components: { Button },
    template: `
      <div>
        <div
        style="
          position: relative;
          boxSizing: border-box;
          margin: 16px 0 16px 0;
          padding: 50px 35px;
          border: 1px dashed #e5e5e5;
          backgroundColor: #ffffff;
          transition: background-color 0.2s;
          textAlign: initial;
        ">
          <h4 class="mb-2">Esempi</h4>
          <hr>
          <p class="mb-2 small">Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni.</p>
          <hr>
          <div class="mb-2">
              <Button color='primary' class="mr-1">
                  Primary
              </Button>
              <Button outline color='primary' class="mr-1">
                  Primary Outline
              </Button>
          </div>
          <div class="mb-2">
              <Button color='secondary' class="mr-1">
                  Secondary
              </Button>
              <Button outline color='secondary' class="mr-1">
                  Secondary Outline
              </Button>
          </div>
          <div class="mb-2">
              <Button color='tertiary' class="mr-1">
                  Tertiary
              </Button>
              <Button outline color='tertiary' class="mr-1">
                  Tertiary Outline
              </Button>
          </div>
          <div class="mb-2">
              <Button color='quaternary' class="mr-1">
                  Quaternary
              </Button>
              <Button outline color='quaternary' class="mr-1">
                  Quaternary Outline
              </Button>
          </div>
          <div class="mb-2">
              <Button color='success' class="mr-1">
                  Success
              </Button>
              <Button outline color='success' class="mr-1">
                  Success Outline
              </Button>
          </div>
          <div class="mb-2">
              <Button color='info' class="mr-1">
                  Info
              </Button>
              <Button outline color='info' class="mr-1">
                  Info Outline
              </Button>
          </div>
          <div class="mb-2">
              <Button color='danger' class="mr-1">
                  Danger
              </Button>
              <Button outline color='danger' class="mr-1">
                  Danger Outline
              </Button>
          </div>
          <div class="mb-2">
              <Button color='warning' class="mr-1">
                  Warning
              </Button>
              <Button outline color='warning' class="mr-1">
                  Warning Outline
              </Button>
          </div>
          <div class="mb-2">
              <Button color='link' class="mr-1">
                  Link
              </Button>
              <Button outline color='link' class="mr-1">
                  Link Outline
              </Button>
          </div>
        </div>          
      </div>
    `,
    methods: { action: action('clicked') },
  })
  )
  .add('Dimensioni', () => ({
    components: { Button },
    template: `
      <div>
        <div
        style="
          position: relative;
          boxSizing: border-box;
          margin: 16px 0 16px 0;
          padding: 50px 35px;
          border: 1px dashed #e5e5e5;
          backgroundColor: #ffffff;
          transition: background-color 0.2s;
          textAlign: initial;
        ">
          <section>
            <div>
                <Button color="primary" size="lg" class="mr-1 btn-lg">
                    Primary Large
                </Button>
                <Button color="secondary" size="lg btn-lg">
                    Secondary Large
                </Button>
                <div class="mt-3" />
                <Button color="primary" size="sm" class="mr-1  btn-sm">
                    Primary Small
                </Button>
                <Button color="secondary" size="sm" class=" btn-sm">
                    Secondary Small
                </Button>
                <div class="mt-3" />
                <Button color="primary" size="xs" class="mr-1 btn-xs">
                    Primary Mini
                </Button>
                <Button color="secondary" size="xs" class="btn-xs">
                    Secondary Mini
                </Button>
                <div class="mt-3" />
                <Button color="primary" block class="d-block mb-1" style="width:100%">
                    Primary Block
                </Button>
                <Button color="secondary" block class="d-block" style="width:100%">
                    Secondary Block
                </Button>
            </div>
          </section>
        </div>
      </div>
  
    `,
    methods: { action: action('clicked') },
  })
  )
  .add('Stato Attivo', () => ({
    components: { Button },
    template: `
      
    `,
    methods: { action: action('clicked') },
  })
  )
  .add('Stato Disabilitato', () => ({
    components: { Button },
    template: `
      
    `,
    methods: { action: action('clicked') },
  })
  )
  .add('Esempi interattivi', () => ({
    components: { Button },
    template: `
      
    `,
    methods: { action: action('clicked') },
  })
  );
  


