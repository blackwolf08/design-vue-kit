
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

storiesOf('Components', module)
  .add('Button', () => ({
    components: { Button },
    template: `
      <div>
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
    `,
    methods: { action: action('clicked') },
  })
  );

