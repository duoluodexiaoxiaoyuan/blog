import { scanDir } from './util'

export default {
	'/': scanDir('article'),
	'/watermark/': scanDir('watermark'),
	'/snowtiny/': scanDir('snowtiny'),
}
