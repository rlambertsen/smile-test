import {shallowMount} from "@vue/test-utils"
import select from '../../select-component/select'

describe('Select Element', () => {

    test('should allow flat array', (done) => {
        let wrapper = shallowMount(select, {
            propsData: {
                value: 'Eastern',
                options: ['Eastern','Manu\'a','Swains Island','Western'],
                id: 'state_name',
                label: 'state_name',
            },
        })
        expect(wrapper.vm.value).toEqual('Eastern')
        done()
    })

    test('should allow multi-dimensional array', (done) => {
        let wrapper = shallowMount(select, {
            propsData: {
                value: 'Eastern',
                options: [{"state_name":"Eastern"},{"state_name":"Manu'a"},{"state_name":"Swains Island"},{"state_name":"Western"}],
                id: 'state_name',
                label: 'state_name',
                objectKey: 'state_name',
                labelKey: 'state_name',
            }
        })
        expect(wrapper.vm.value).toEqual('Eastern')
        done()
    })

    test('should work when initial value is null', (done) => {
        let wrapper = shallowMount(select, {
            propsData: {
                value: '',
                options: [{"state_name":"Eastern"},{"state_name":"Manu'a"},{"state_name":"Swains Island"},{"state_name":"Western"}],
                id: 'state_name',
                label: 'state_name',
                objectKey: 'state_name',
                labelKey: 'state_name',
            }
        })
        expect(wrapper.vm.value).toEqual('')
        done()
    })

    test('should allow set option on load', (done) => {
        let wrapper = shallowMount(select, {
            propsData: {
                value: 'Eastern',
                options: [{"state_name":"Eastern"},{"state_name":"Manu'a"},{"state_name":"Swains Island"},{"state_name":"Western"}],
                id: 'state_name',
                label: 'state_name',
                objectKey: 'state_name',
                labelKey: 'state_name',
            }
        })
        expect(wrapper.vm.value).toEqual('Eastern')
        done()
    })

    test('should allow multi-select', (done) => {
        let wrapper = shallowMount(select, {
            propsData: {
                multiple: true,
                options: [{"state_name":"Eastern"},{"state_name":"Manu'a"},{"state_name":"Swains Island"},{"state_name":"Western"}],
                id: 'state_name',
                label: 'state_name',
                objectKey: 'state_name',
                labelKey: 'state_name',
                value: []
            }
        })
        let el = wrapper.find('select')
        el.setValue(["Eastern","Manu'a"])
        let options = Array.from(el.element.selectedOptions).map(o => o.value)
        expect(options).toEqual(["Eastern","Manu'a"])
        done();
    })
})
