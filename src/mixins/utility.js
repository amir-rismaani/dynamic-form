
import errors from '../constants/Errors'
import dictionary from '../constants/Dictionary'

export default {
    data() {
        return {
            inputValue: null,
            display: false,
            required: false,
            rules: {
                required: value => !!value || errors.Required,
            }
        }
    },
    props: {
        attr: {
            type: Object,
            require: true,
        },
    },
    computed: {
        ruleChecker() {
            const dependency = this.attr.dependency || false;
            return dependency && Object.prototype.hasOwnProperty.call(dependency, dictionary.Required)
        },
        isRequired() {
            return this.required && this.ruleChecker
        },
        getRule() {
            return this.isRequired ? [this.rules.required] : []
        }
    },
    methods: {
        sendInputValue() {
            this.$emit("inputValue", this.inputValue);
        },
        sendRef() {
            this.forwardRef(this.$refs[this.attr.name]);
        },
        chageItem(value) {
            this.sendInputValue(value);
            this.forwardRef(this.$refs[this.attr.name]);
        },
        forwardRef(ref) {
            console.log(ref)
            this.$emit("setRefs", ref.form.$children);
        }
    }
}