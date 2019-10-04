
module.exports = class SpotlightRedirect {
    constructor(rules = []) {
        this.rules = rules;
    }

    /**
     * create a rule function
     * @param {*} rule 
     */
    _genRuleMatcher(rule) {

        return (url) => {
            return new RegExp(rule.from).test(url)
        }
    }

    _genRuleReplacer(rule) {
        return url => {
            debugger
            return url.replace(new RegExp(rule.from), rule.to)
        }
    }
    
    _matchRule(url) {
        return this.rules.find(rule => 
            this._genRuleMatcher(rule)(url)
        );
    }

    needRedirect(url) {
        return !!this._matchRule(url);
    }

    redirectTo(url) {
        const replacer = this._genRuleReplacer(this._matchRule(url));

        return replacer(url)
    }
}