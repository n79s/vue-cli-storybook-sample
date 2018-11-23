import { shallowMount,mount  } from '@vue/test-utils'
import CountComponent from '@/components/CountComponent.vue'

describe('CountComponent.vue', async () => {
    const wrapper = mount(CountComponent)

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<input>')
    })
    it('has a button', () => {
        expect(wrapper.contains('button')).toBe(true)
    })
    it('init val',() => {
        expect(wrapper.vm.count).toBe(0)
    })
    it('count up',() => {
        const button = wrapper.find('button')
        //初期値
        wrapper.setData({ count: 0 })
        //ボタンクリック
        button.trigger('click')
        expect(wrapper.vm.count).toBe(1)
    })
    it('renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot()
    })
})
