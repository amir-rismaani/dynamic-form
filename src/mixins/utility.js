export default {
    data() {
        return {
            inputValue: null,
            display: false,
            required: false
        }
    },
    props: {
        attr: {
            type: Object,
            require: true,
        },
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
            this.$emit("setRefs", ref.form.$children);
        }
    }
}